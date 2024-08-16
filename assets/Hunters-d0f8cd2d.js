import{d as a,u as r,m as s,e as c,c as m,w as e,r as l,o as u,j as p,a as g,_ as d}from"./index-46cadff3.js";import{P as h}from"./ProjectInfoComponent-ea2c1e37.js";import"./InfoComponent-9e634c21.js";import"./Linker-ea446d0a.js";const f=a({__name:"Hunters",setup(b){const t=r(),n=[{label:"Github",icon:"pi pi-fw pi-github",command:()=>window.open("https://github.com/Bussler/ProjectHunters","_blank")}],o=s([{itemImageSrc:"/images/projectHunters/inference.gif",thumbnailImageSrc:"/images/projectHunters/inference.gif",description:"Inference of the trained agent in the mock environment.",title:"Mock Environment"},{itemImageSrc:"/images/projectHunters/Gameplay.PNG",thumbnailImageSrc:"/images/projectHunters/Gameplay.PNG",description:"Inference of the trained agent in Unity.",title:"Gameplay in Unity"}]);return c(async()=>{t.setToolbarComponents(n)}),(v,_)=>{const i=l("Card");return u(),m(i,null,{title:e(()=>[p("Project Hunters")]),content:e(()=>[g(h,{images:o.value,about:["This project combines my interests in deep reinforcement learning with game development.","For this I developed an small game in Unity that works as an environment for the agent to play in. I then created a custom gym environment that relays observations and agent action to and from the Unity environment via UDP Sockets.","Training is done with rllib, an open source library for reinforcement learning. To speed up training I created a script-abstraction of the Unity Environment that mocks the real Unity environment. The real Unity environment is then used by the trained agent during inference."],goal:["The goal of this project is to train a deep reinforcement agent (PPO) on a custom top down VampireSurvivors Clone. Besides being an interesting problem, this could e.g. be used for the development of custom npc behaviours."],background:null,results:["The PPO agent is able to learn basic evasive behaviours of incoming enemies relatively quickly after about 1000 distributed training iterations (1h of training). The agent is able to successfully evade enemies, until they die automatically."],github:"https://github.com/Bussler/ProjectHunters",paper:null},null,8,["images"])]),_:1})}}});const k=d(f,[["__scopeId","data-v-73e4c6c9"]]);export{k as default};
