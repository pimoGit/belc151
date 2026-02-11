function checkTime(req, res, next) {
    // ci ricaviamo una stringa della data corretnte (comprenssiva di orario)
    const oggi = new Date();
    const currentTime = oggi.toLocaleString();

    // output per check esecuzione del middleware
    console.log("Hey ti ho visto che sei passato da questa rotta alle:", currentTime);

    next();

}

module.exports = checkTime;