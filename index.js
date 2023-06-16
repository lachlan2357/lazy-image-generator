#! /usr/bin/env node

import { existsSync, unlinkSync, readdirSync } from "fs";
import { Image } from "image-js";
import { argv, env, exit } from "process";
import { Command } from "commander";
import chalk from "chalk";

async function convert(inDir, outDir) {
	const inDirExists = existsSync(inDir);
	const outDirExists = existsSync(outDir);

	if (!inDirExists) return console.error("inDir is not a directory.");
	if (!outDirExists) return console.error("outDir is not a directory.");

	const inDirContents = readdirSync(inDir);
	const outDirContents = readdirSync(outDir);

	outDirContents.forEach(file => unlinkSync(`${outDir}/${file}`));

	inDirContents.forEach(async file => {
		if (!/.*?\.png/.exec(file)) {
			console.log(chalk.dim(`Skipping ${file} | not a .png file`));
			return;
		};
		const image = await Image.load(`${inDir}/${file}`);
		const smaller = image.resize({height: 100});
		smaller.save(`${outDir}/${file}`);	
		console.log(`Converted ${file}`);
	});
}

const program = new Command();

program
	.version(env.npm_package_version ?? "Unknown")
	.description(env.npm_package_description ?? "Unknown")
	.option("--inDir [directory]", "Specify the directory which contains input images")
	.option("--outDir [directory]", "Specify the directory which shrunk images will be output to")
	.parse(argv)

const options = program.opts();

if (Object.keys(options).length === 0) {
	program.outputHelp();
	exit(0);
}

if (typeof options.inDir !== "string") {
	program.error("no --inDir specified")
}

if (typeof options.outDir !== "string") {
	program.error("no --outDir specified")
}

convert(options.inDir, options.outDir);