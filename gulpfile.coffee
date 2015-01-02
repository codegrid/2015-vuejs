gulp = require "gulp"
cp = require "child_process"
exec = cp.exec
bs = require "browser-sync"
reload = bs.reload

editdir = "../"

gulp.task "atom", (cb)->
  exec "atom #{editdir}", (err, stdout, stderr) ->
    console.log stdout
    console.log stderr
    cb err

gulp.task "default", ["atom"], ->
  bs.init null,
    server:
      baseDir: "."
      host: "localhost"
      notify: false
      directory: true

  gulp.watch ["src/js/**/*.js"], reload
  gulp.watch ["*.html"], reload
