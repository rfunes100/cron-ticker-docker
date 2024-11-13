let times = 0 

const syncdb = () => {
    times++;
  console.log('tica cada multiplo de 5 segundos:', times);
 return times 
}

module.exports = {
    syncdb
}