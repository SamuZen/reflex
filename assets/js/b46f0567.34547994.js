"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[255],{7390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(1966),r=(n(9496),n(9613)),s=n(7934),i=n(4575);const l={sidebar_position:4,description:"Learn the different ways to subscribe to state changes with Reflex"},o="Subscribing to State",u={unversionedId:"guides/subscribing-to-state",id:"guides/subscribing-to-state",title:"Subscribing to State",description:"Learn the different ways to subscribe to state changes with Reflex",source:"@site/docs/guides/subscribing-to-state.md",sourceDirName:"guides",slug:"/guides/subscribing-to-state",permalink:"/reflex/docs/guides/subscribing-to-state",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn the different ways to subscribe to state changes with Reflex"},sidebar:"docsSidebar",previous:{title:"Using Selectors",permalink:"/reflex/docs/guides/using-selectors"},next:{title:"Entities and Observers",permalink:"/reflex/docs/guides/observing-entities"}},c={},d=[{value:"Player list",id:"player-list",level:2},{value:"Conditional side effects",id:"conditional-side-effects",level:3},{value:"One-time side effects",id:"one-time-side-effects",level:3},{value:"Async side effects",id:"async-side-effects",level:3},{value:"Observing individual players",id:"observing-individual-players",level:3},{value:"Summary",id:"summary",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscribing-to-state"},"Subscribing to State"),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"using-selectors"},"Using Selectors"),", we learned how to use selectors to read and subscribe to state from the store. Reflex provides a few more useful ways to subscribe to state changes with selectors."),(0,r.kt)("admonition",{title:"we discuss:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e Common use cases for subscribing to state"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd0c Different ways to subscribe to state"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcda How to use ",(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#subscribeselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"subscribe")),", ",(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#onceselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"once")),", and ",(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#waitselector-predicate"},(0,r.kt)("inlineCode",{parentName:"a"},"wait"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"player-list"},"Player list"),(0,r.kt)("p",null,"Say your state had a ",(0,r.kt)("inlineCode",{parentName:"p"},"players")," slice that stored the health of each player in a game:"),(0,r.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="players.ts" showLineNumbers',title:'"players.ts"',showLineNumbers:!0},'import { createProducer } from "@rbxts/reflex";\n\ninterface PlayersState {\n    readonly entities: {\n        readonly [id: string]: PlayerEntity;\n    };\n}\n\nexport interface PlayerEntity {\n    readonly health: number;\n}\n\nconst initialState: PlayersState = {\n    players: {},\n};\n\nexport const playersSlice = createProducer(initialState, {\n    addPlayer: (state, id: string) => ({\n        ...state,\n        players: { ...state.players, [id]: { health: 100 } },\n    }),\n\n    setPlayerHealth: (state, id: string, health: number) => ({\n        ...state,\n        players: { ...state.players, [id]: { health } },\n    }),\n});\n'))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="players.lua" showLineNumbers',title:'"players.lua"',showLineNumbers:!0},"local Reflex = require(ReplicatedStorage.Packages.Reflex)\n\nexport type PlayersState = {\n    entities: { [string]: PlayerEntity },\n}\n\nexport type PlayersActions = {\n    addPlayer: (id: string) -> (),\n    setPlayerHealth: (id: string, health: number) -> (),\n}\n\nexport type PlayerEntity = {\n    health: number,\n}\n\nlocal initialState: PlayersState = {\n    entities = {},\n}\n\nlocal playersSlice = Reflex.createProducer(initialState, {\n    addPlayer = function(state, id: string)\n        local nextState = table.clone(state)\n        local nextEntities = table.clone(state.entities)\n        nextEntities[id] = { health = 100 }\n        nextState.entities = nextEntities\n        return nextState\n    end,\n\n    setPlayerHealth = function(state, id: string, health: number)\n        local nextState = table.clone(state)\n        local nextEntities = table.clone(state.entities)\n        nextEntities[id] = { health = health }\n        nextState.entities = nextEntities\n        return nextState\n    end,\n})\n\nreturn { playersSlice = playersSlice }\n")))),(0,r.kt)("p",null,"The root state has a ",(0,r.kt)("inlineCode",{parentName:"p"},"players")," slice with an ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," field that contains your player entities. You will often need to run side effects for changes to state when working with entities. For example, you may want to play a sound when a player's health decreases."),(0,r.kt)("h3",{id:"conditional-side-effects"},"Conditional side effects"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"../reference/reflex/producer#subscribeselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"subscribe"))," to run side effects when a selector's value changes. In this example, we subscribe to the health of ",(0,r.kt)("inlineCode",{parentName:"p"},"Player1")," and play a sound when their health decreases:"),(0,r.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},'import { RootState, producer } from "./producer";\n\nconst selectPlayerHealthById = (id: string) => {\n    return (state: RootState) => {\n        return state.players.entities[id].health;\n    };\n};\n\nconst selectHealth = selectPlayerHealthById("Player1");\n\nproducer.subscribe(selectHealth, (health, lastHealth) => {\n    if (health < lastHealth) {\n        // Play sound\n    }\n});\n'))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},'local producer = require(script.Parent.producer)\n\nlocal function selectPlayerHealthById(id: string)\n    return function(state: producer.RootState)\n        return state.players.entities[id].health\n    end\nend\n\nlocal selectHealth = selectPlayerHealthById("Player1")\n\nproducer:subscribe(selectHealth, function(health, lastHealth)\n    if health < lastHealth then\n        -- Play sound\n    end\nend)\n')))),(0,r.kt)("p",null,"There are a few things to note about this example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"We defined ",(0,r.kt)("inlineCode",{parentName:"strong"},"selectPlayerHealthById"),",")," a ",(0,r.kt)("a",{parentName:"li",href:"using-selectors#passing-arguments-to-selectors"},"selector factory"),", to create a simple selector that returns the health of a player with a given ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Our selector isn't ",(0,r.kt)("a",{parentName:"strong",href:"using-selectors#transforming-state"},"memoized"),",")," but that's okay. It's not a problem since it's fast and returns a value directly from the state."),(0,r.kt)("li",{parentName:"ul"},"Our subscription callback receives the ",(0,r.kt)("strong",{parentName:"li"},"current value")," and the ",(0,r.kt)("strong",{parentName:"li"},"last value")," that the listener received. This is useful for comparing values and running conditional side effects.")),(0,r.kt)("p",null,"As a shorthand, you can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate")," argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," to only run the listener when the predicate returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". In this case, we can use it to only run the listener if the player's health is lower than the last health:"),(0,r.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"const didDecrease = (current: number, previous: number) => {\n    return current < previous;\n};\n\nproducer.subscribe(selectHealth, didDecrease, (health, lastHealth) => {\n    // Play sound\n});\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"local function didDecrease(current: number, previous: number)\n    return current < previous\nend\n\nproducer:subscribe(selectHealth, didDecrease, function(health, lastHealth)\n    -- Play sound\nend)\n")))),(0,r.kt)("h3",{id:"one-time-side-effects"},"One-time side effects"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"../reference/reflex/producer#onceselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"once"))," to only run a listener the next time a value changes. If you want to end the game once the player's health reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"once"),":"),(0,r.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"const isDead = (health: number) => {\n    return health <= 0;\n};\n\nproducer.once(selectHealth, isDead, () => {\n    // End game\n});\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"local function isDead(health: number)\n    return health <= 0\nend\n\nproducer:once(selectHealth, isDead, function()\n    -- End game\nend)\n")))),(0,r.kt)("p",null,"Once the player's health reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the listener will be disconnected and the game will end."),(0,r.kt)("h3",{id:"async-side-effects"},"Async side effects"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("a",{parentName:"p",href:"../reference/reflex/producer#waitselector-predicate"},(0,r.kt)("inlineCode",{parentName:"a"},"wait")),", which returns a Promise that resolves with the new value. This is especially useful for running side effects in async functions:"),(0,r.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},'async function startGame() {\n    producer.setGameStatus("started");\n\n    return producer.wait(selectHealth, isDead).then(() => {\n        producer.setGameStatus("finished");\n    });\n}\n'))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},'function startGame()\n    producer.setGameStatus("started")\n\n    return producer:wait(selectHealth, isDead):andThen(function()\n        producer.setGameStatus("finished")\n    end)\nend\n')))),(0,r.kt)("p",null,"This uses ",(0,r.kt)("a",{parentName:"p",href:"../reference/reflex/producer#waitselector-predicate"},(0,r.kt)("inlineCode",{parentName:"a"},"wait"))," to determine when to end the game, and can be chained off of to start the next game. You can apply the same logic to other side effects, like ending multiplayer matches or showing a game over screen."),(0,r.kt)("h3",{id:"observing-individual-players"},"Observing individual players"),(0,r.kt)("p",null,"You learned how to run side effects for ",(0,r.kt)("em",{parentName:"p"},"one")," player, but what if you want to run individual side effects for ",(0,r.kt)("em",{parentName:"p"},"each")," player? We will learn how to use ",(0,r.kt)("a",{parentName:"p",href:"../reference/reflex/producer#observeselector-discriminator-observer"},(0,r.kt)("inlineCode",{parentName:"a"},"observe"))," in the next section."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can create ",(0,r.kt)("strong",{parentName:"li"},"conditional side effects")," by passing a ",(0,r.kt)("inlineCode",{parentName:"li"},"predicate")," function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#subscribeselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"subscribe"))," runs a listener when a selector's value changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#onceselector-predicate-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"once"))," runs a listener the next time a selector's value changes, then disconnects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../reference/reflex/producer#waitselector-predicate"},(0,r.kt)("inlineCode",{parentName:"a"},"wait"))," returns a Promise that resolves with the next value of a selector.")))}m.isMDXComponent=!0}}]);