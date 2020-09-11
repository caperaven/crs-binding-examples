const fs = require("fs");
const mkdirp = require("mkdirp");
const glob = require("glob");
const path = require("path");
const CleanCSS = require('clean-css');

class Publish {
    static async distribute() {
        const instance = new Publish();
        await instance.copyNodeModules("crs-binding");
        await instance.copyNodeModules("crs-router");
        await instance.cleanCSS("./styles/**/*.css");
        await instance.copyFiles("./readme.md");
        await instance.copyFiles("./index.html");
        await instance.copyFiles("./index.js");
        await instance.copyFiles("./favicon.ico");
        await instance.copySource("app");
        await instance.copySource("components");
        await instance.bumpVersion();
        await instance.saveCommands();
    }
    
    constructor() {
        mkdirp.sync(path.resolve("./publish"));
        this.commands = [
            'terser index.js -c -m -o index.js',
            'terser node_modules/crs-binding/crs-binding.js -c -m -o node_modules/crs-binding/crs-binding.js',
            'terser node_modules/crs-binding/crs-bindable-element.js -c -m -o node_modules/crs-binding/crs-bindable-element.js',
            'terser node_modules/crs-binding/crs-view-base.js -c -m -o node_modules/crs-binding/crs-view-base.js'
        ];
    }

    async copyFiles(query, folder) {
        const files = await this.getFiles(query);
        for (let file of files) {
            const target = folder != null ? `./publish/${folder}/` : `./publish/`;
            const fileName = path.basename(file);
            this.initFolder(target);
            fs.copyFileSync(file, `${target}/${fileName}`);
        }
    }

    initFolder(folder) {
        mkdirp.sync(path.resolve(folder));
    }

    getFiles(query) {
        return new Promise((resolve, reject) => {
            const o = {};

            glob(query, o, (error, files) => {
                if (error) {
                    console.error(error);
                    reject(error);
                }

                resolve(files);
            });
        });
    }

   async bumpVersion() {
        const sourcePackage = `${path.resolve(".")}/package.json`;
        const targetPackage = `${path.resolve(".")}/publish/package.json`;

        const content = fs.readFileSync(sourcePackage, "utf8");
        const pkg = JSON.parse(content);
        const version = pkg.version;
        const isPre = version.indexOf("-pre") > -1;
        const preConstants = ["", "-pre"];

        const versions = version.split(".");
        versions[2] = versions[2].replace("-pre", "");
        versions[2] = Number(versions[2]) + 1;
        pkg.version = `${versions.join(".")}${preConstants[+ isPre]}`;

        fs.writeFileSync(sourcePackage, JSON.stringify(pkg, null, 4), "utf8");
        fs.copyFileSync(sourcePackage, targetPackage);
    }

    async cleanCSS(query, folder) {
        const cssClean = new CleanCSS({
            inline: ['all']
        });

        const files = await this.getFiles(query);
        for (let file of files) {
            const basePath = path.dirname(file).replace("./", "");
            const target = `./publish/${basePath}/`;
            const fileName = path.basename(file);
            this.initFolder(target);

            const css = cssClean.minify([file]);
            fs.writeFileSync(`${target}${fileName}`, css.styles,"utf8");
        }
    }

    async copySource(sourceFolder) {
        const files = await this.getFiles(`./${sourceFolder}/**/*.*`);
        for (let file of files) {
            console.log(file);

            const basePath = path.dirname(file).replace("./", "");
            const target = `./publish/${basePath}/`;
            const fileName = path.basename(file);
            const ext = path.extname(file);
            this.initFolder(target);

            const toFile = `${target}${fileName}`.replace("publish/", "");

            if (ext == ".js") {
                this.commands.push(`terser ${toFile} -c -m -o ${toFile}`);
            }

            fs.copyFileSync(file, `${target}${fileName}`);
        }
    }

    async copyNodeModules(module) {
        const files = await this.getFiles(`./node_modules/${module}**/*.*`);
        for (let file of files) {
            const basePath = path.dirname(file).replace("./", "");
            const target = `./publish/${basePath}/`;
            const fileName = path.basename(file);
            this.initFolder(target);
            fs.copyFileSync(file, `${target}${fileName}`);
        }
    }

    async saveCommands() {
        const string = this.commands.join("\n");
        const target = `./publish/minify.sh`;
        fs.writeFileSync(target, string, "utf8");
    }
}

Publish.distribute();