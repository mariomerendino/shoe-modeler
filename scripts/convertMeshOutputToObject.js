const fs = require('fs');

const parse = (filePath) => {
  let file = fs.readFileSync(filePath, 'utf8');
  let lines = file.split('\n').filter((line) => line.includes("<mesh"));

  let arr = [];
  lines.forEach((line) => {
    // first get the nodes name;
    let name = line.split('.')[1]
    let position = line.split('position={')[1].split('}')[0]
    let rotation = line.split('rotation={')[1].split('}')[0]
    let scale = null;
    try {
      scale = parseInt(line.split('scale={')[1].split('}')[0]);
    }
    catch {
      scale = 1;
    }

    arr.push({
      name: name,
      position: position,
      rotation: rotation,
      scale: scale
    })

  })
  return arr;
}

const result = parse('Model.js');
console.log(JSON.stringify(result, null, 2));

