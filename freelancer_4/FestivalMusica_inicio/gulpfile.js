// src: identifica archivo; dest: lo guarda
const {src, dest, watch} = require("gulp"); // Extrae la funcionalidad de gulp en este archivo
const sass = require("gulp-sass")(require("sass"));

function css(callback) {
  src('src/scss/**/*.scss') // Identificar el archivo SASS
    .pipe(sass()) // Compilarlo
    .pipe(dest('build/css')); // Almacenarlo en el disco duro

  callback(); // Callback que avisa a gulp cuando llegamos al final
};

function dev (callback) {
  watch('src/scss/**/*.scss', css); // Cuando cambie la hoja de estilos, manda a llamar a la función css (la de arriba)

  callback();
};


exports.css = css;
exports.dev = dev;