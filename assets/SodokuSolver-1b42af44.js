import{d as r,u as n,m as l,e as i,c as u,w as o,r as m,o as c,j as d,a as p,_ as g}from"./index-fecda5d8.js";import{P as h}from"./ProjectInfoComponent-44bf3508.js";import"./InfoComponent-8ffef81d.js";import"./Linker-1fde4ebd.js";const S=r({__name:"SodokuSolver",setup(k){const e=n(),t=[{label:"Github",icon:"pi pi-fw pi-github",command:()=>window.open("https://github.com/Bussler/PythonSodokuSolver","_blank")}],s=l([{itemImageSrc:"/images/sodoku-solver/sod1.png",thumbnailImageSrc:"/images/sodoku-solver/sod1.png",description:"",title:"Sodoku Solver"},{itemImageSrc:"/images/sodoku-solver/sod4.png",thumbnailImageSrc:"/images/sodoku-solver/sod4.png",description:"Progress of solving.",title:"Sodoku Solver"},{itemImageSrc:"/images/sodoku-solver/sod3.png",thumbnailImageSrc:"/images/sodoku-solver/sod3.png",description:"Parse sodoku state.",title:"Sodoku Solver"}]);return i(async()=>{e.setToolbarComponents(t)}),(v,_)=>{const a=m("Card");return c(),u(a,null,{title:o(()=>[d("Python Sudoku Solver")]),content:o(()=>[p(h,{images:s.value,about:["A simple program that generates solutions to the famous Sudoku games with the help of recursive backtracking. The user can either play the Sudoku – make notes and place numbers to submit a solution, or generate and show the corresponding solution in one go.","A sample Sudoku problem for solving comes with the project. Own Sudoku Problems have to be converted to .csv files (like shown in the sample file) and can then be imported. Furthermore, the program can also create random Sudoku problems."],goal:["The goal of this project was to experiment with the python programming language and learn how to create simply GUIs with the pygame library."],background:null,results:null,github:"https://github.com/Bussler/PythonSodokuSolver",paper:null},null,8,["images"])]),_:1})}}});const I=g(S,[["__scopeId","data-v-cda2165e"]]);export{I as default};
