const funcAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Async!");
      }, 2000); 
    } else {
      reject(new Error("ERROR!"));
    }
  });
};

const anotherFunc = async () => {
  console.log('esperando...');
  const coso = await funcAsync();
  console.log(coso);
  console.log("dentro de la func async");
};

console.log('antes del llamado');
anotherFunc();
console.log('despues del llamado');