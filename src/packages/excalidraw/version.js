#!/usr/bin/env node

let fs = require('fs');
let semver = require('semver');
let path = require("path");

const versionDate = (date) => date.toISOString().replace(".000", "");

const commitHash = () => {
  try {
    return require("child_process")
      .execSync("git rev-parse --short HEAD")
      .toString()
      .trim();
  } catch {
    return "none";
  }
};

const commitDate = (hash) => {
  try {
    const unix = require("child_process")
      .execSync(`git show -s --format=%ct ${hash}`)
      .toString()
      .trim();
    const date = new Date(parseInt(unix) * 1000);
    return versionDate(date);
  } catch {
    return versionDate(new Date());
  }
};

const getFullVersion = () => {
  const hash = commitHash();
  return `${commitDate(hash)}-${hash}`;
};

if (fs.existsSync('./package.json')) {
  var package = require('./package.json');
  const currentVersion = package.version;

  let newVersion = semver.inc(currentVersion, 'prerelease', {
    'loose': true,
  })

  package.version = newVersion;
  fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));

  console.log(getFullVersion());

  console.log('Version updated', currentVersion, '=>', newVersion);
}
