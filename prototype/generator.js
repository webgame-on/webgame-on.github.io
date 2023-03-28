// 1. prepare all shapes
let shapes = [
    [[1,1],[1,1]],// o0
    
    [[1],[1],[1],[1]],// i0
    [[1,1,1,1]],// i1
    
    [[1,0],[1,1],[0,1]],// s0
    [[0,1,1],[1,1,0]],// s1
    
    [[0,1],[1,1],[1,0]],// z0
    [[1,1,0],[0,1,1]],// z1
    
    [[1,0],[1,1],[1,0]],// t0
    [[1,1,1],[0,1,0]],// t1
    [[0,1],[1,1],[0,1]],// t2
    [[0,1,0],[1,1,1]],// t3
    
    [[1,0],[1,0],[1,1]],// l0
    [[1,1,1],[1,0,0]],// l1
    [[1,1],[0,1],[0,1]],// l2
    [[0,0,1],[1,1,1]],// l3
    
    [[0,1],[0,1],[1,1]],// j0
    [[1,0,0],[1,1,1]],// j1
    [[1,1],[1,0],[1,0]],// j2
    [[1,1,1],[0,0,1]]// j3   
];

let size = {
    row: 6, // 0, 1, 2, 3, 4, 5, 6
    col: 13 // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
};

let symbol = 1;

// 2. make grid
let grid = []; // grid[row][col]
for (let i = 0; i <= size.row; i++) {
    let row = [];
    for (let i = 0; i <= size.col; i++) {
        row.push(0);
    }
    grid.push(row);
}


// 3. loop grid from top left
let result = [];

for (let row = 0; row <= size.row; row++) {
    for (let col = 0; col <= size.col; col++) {
        
        let availableShapes = checkFit(row, col);
        
        if (availableShapes.length > 0) {
            let id = availableShapes[Math.floor(Math.random() * availableShapes.length)];
            fillGrid(row, col, id);
            
            result.push(row, col, id + 1);
        }
    }
}


// 4. fill empty spots with shape id 0
for (let row = 0; row <= size.row; row++) {
    for (let col = 0; col <= size.col; col++) {
        if (grid[row][col] == 0) {
            grid[row][col] = symbol;
            result.push(row, col, 0);
            symbol += 1;
        }
    }
}


// 5. display result array as json
console.log(JSON.stringify(result));
console.log(grid);
console.log(result);


function checkFit(gridRow, gridCol) {
    let result = [];

    for (let id = 0; id < shapes.length; id++) {
        let check = checkShape(gridRow, gridCol, id);
        
        if (check == true) {
            result.push(id); 
        }
    }

    return result;
};

function checkShape(gridRow, gridCol, id) {
    let shape = shapes[id];
    
    for (let shapeRow = 0; shapeRow < shapes[id].length; shapeRow++) {
        for (let shapeCol = 0; shapeCol < shapes[id][0].length; shapeCol++) {
            
            // if empty slot on shape
            if (shape[shapeRow][shapeCol] == 0) {
                continue;
            }
            
            // if out of bounds
            if (gridRow + shapeRow > size.row || gridCol + shapeCol > size.col) {
                return false;
            }
            
            // if spot is taken
            if (grid[gridRow+shapeRow][gridCol+shapeCol] != 0) {
                return false;
            }
        }
    }
    
    return true;
};

function fillGrid(gridRow, gridCol, id) {
    let shape = shapes[id];
    
    for (let shapeRow = 0; shapeRow < shape.length; shapeRow++) {
        for (let shapeCol = 0; shapeCol < shape[0].length; shapeCol++) {
            
            if (shape[shapeRow][shapeCol] == 0) {
                continue;
            }
            
            grid[gridRow+shapeRow][gridCol+shapeCol] = symbol;
        }
    }
    
   symbol += 1;
};