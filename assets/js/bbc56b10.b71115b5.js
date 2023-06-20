"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[657],{3582:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=t(1966),n=(t(9496),t(9613)),o=t(7934),l=t(4575),s=t(5488);const c={sidebar_position:3},d="combineProducers",i={unversionedId:"reference/reflex/combine-producers",id:"reference/reflex/combine-producers",title:"combineProducers",description:"combineProducers lets you combine multiple producers into a single producer.",source:"@site/docs/reference/reflex/combine-producers.md",sourceDirName:"reference/reflex",slug:"/reference/reflex/combine-producers",permalink:"/reflex/docs/reference/reflex/combine-producers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"referenceSidebar",previous:{title:"Producer",permalink:"/reflex/docs/reference/reflex/producer"},next:{title:"createSelector",permalink:"/reflex/docs/reference/reflex/create-selector"}},u={},p=[{value:"Reference",id:"reference",level:2},{value:"<code>combineProducers(producers)</code>",id:"combineproducersproducers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:2},{value:"Using multiple producers",id:"using-multiple-producers",level:3},{value:"Selecting combined state",id:"selecting-combined-state",level:3},{value:"Dispatching one action to multiple producers",id:"dispatching-one-action-to-multiple-producers",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p},b="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(b,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"combineproducers"},"combineProducers"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"combineProducers")," lets you combine multiple ",(0,n.kt)("a",{parentName:"p",href:"producer"},"producers")," into a single producer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const producer = combineProducers({\n    foo: fooProducer,\n    bar: barProducer,\n    // ...\n});\n")),(0,n.kt)(s.Z,{toc:p,mdxType:"TOCInline"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"combineproducersproducers"},(0,n.kt)("inlineCode",{parentName:"h3"},"combineProducers(producers)")),(0,n.kt)("p",null,"To combine multiple ",(0,n.kt)("a",{parentName:"p",href:"producer"},"producers"),", pass them into ",(0,n.kt)("inlineCode",{parentName:"p"},"combineProducers")," as a map of names to producers."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fooProducer = createProducer(0, {\n    incrementFoo: (state, value: number) => state + value,\n});\n\nconst barProducer = createProducer(0, {\n    incrementBar: (state, value: number) => state + value,\n});\n\nconst producer = combineProducers({\n    foo: fooProducer,\n    bar: barProducer,\n});\n"))),(0,n.kt)(l.Z,{value:"Luau",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local fooProducer = createProducer(0, {\n    incrementFoo = function(state, value: number)\n        return state + value\n    end,\n})\n\nlocal barProducer = createProducer(0, {\n    incrementBar = function(state, value: number)\n        return state + value\n    end,\n})\n\nlocal producer = Redux.combineProducers({\n    foo = fooProducer,\n    bar = barProducer,\n})\n")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"combineProducers")," will return a new ",(0,n.kt)("a",{parentName:"p",href:"producer"},"producer")," with state organized under the keys passed in ",(0,n.kt)("inlineCode",{parentName:"p"},"producers"),". Actions are inherited from the original producers and will update the state of their corresponding sub-states."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"producer.incrementFoo(1); // { foo: 1, bar: 0 }\nproducer.incrementBar(1); // { foo: 1, bar: 1 }\n")),(0,n.kt)("p",null,"A game managed by Reflex will typically have a single root producer that contains all of the game's state. State can be organized into sub-producers to make it easier to manage and update."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#usage"},"See more examples below.")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"producers")," - An object containing the ",(0,n.kt)("a",{parentName:"li",href:"producer"},"producers")," to combine. The combined producer's state will organize the state by the keys of this object. Actions will be inherited from the original producers.")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,"A new ",(0,n.kt)("a",{parentName:"p",href:"producer"},"producer")," with the combined initial states and actions of the given producers."),(0,n.kt)("admonition",{title:"Caveats",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The producer returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"combineProducers")," is decoupled from the original producers. Updating the state of the combined producer will not update the state of the original producers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Actions can be stacked. If two actions with the same name are dispatched, they will both be called and update their respective sub-states. This can be useful for ",(0,n.kt)("a",{parentName:"p",href:"#dispatching-one-action-to-multiple-producers"},"batching updates"),", but make sure the functions have identical signatures.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"using-multiple-producers"},"Using multiple producers"),(0,n.kt)("p",null,"It's good practice to organize state into different producers and then combine them with ",(0,n.kt)("a",{parentName:"p",href:"combine-producers"},(0,n.kt)("inlineCode",{parentName:"a"},"combineProducers"))," to use in your game. This makes it easier to manage state and update it in a predictable way."),(0,n.kt)("p",null,"Let's say we have a game that has a page router and a leaderboard. We can create a file for each sub-producer, and combine them into a single root producer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"producer\n\u251c\u2500\u2500 router\n\u2514\u2500\u2500 leaderboard\n")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In TypeScript, you should use ",(0,n.kt)("inlineCode",{parentName:"p"},"InferState")," or an equivalent type to export the root state from the root producer file. This is for easy access to state for certain features like ",(0,n.kt)("a",{parentName:"p",href:"producer#running-side-effects"},"selectors")," and Hooks.")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"router.ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { createProducer } from "@rbxts/reflex";\n\nexport interface RouterState {\n    readonly page: string;\n}\n\nconst initialState: RouterState = {\n    page: "home",\n};\n\nexport const routerProducer = createProducer(initialState, {\n    setPage: (state, page: string) => ({ ...state, page }),\n});\n'))),(0,n.kt)(l.Z,{value:"leaderboard.ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { createProducer } from "@rbxts/reflex";\n\nexport interface LeaderboardState {\n    readonly players: readonly number[];\n}\n\nconst initialState: LeaderboardState = {\n    players: [],\n};\n\nexport const leaderboardProducer = createProducer(initialState, {\n    addPlayer: (state, player: number) => ({\n        ...state,\n        players: [...state.players, player],\n    }),\n\n    removePlayer: (state, player: number) => ({\n        ...state,\n        players: state.players.filter((p) => p !== player),\n    }),\n});\n'))),(0,n.kt)(l.Z,{value:"index.ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { combineProducers, InferState } from "@rbxts/reflex";\nimport { routerProducer } from "./router";\nimport { leaderboardProducer } from "./leaderboard";\n\nexport type RootProducer = typeof producer;\n\nexport type RootState = InferState<RootProducer>;\n\nexport const producer = combineProducers({\n    router: routerProducer,\n    leaderboard: leaderboardProducer,\n});\n'))),(0,n.kt)(l.Z,{value:"Usage",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { producer } from "./producer";\n\nproducer.setPage("leaderboard");\n// --\x3e { router: { page: "leaderboard" }, ... }\n\nproducer.addPlayer(123);\n// --\x3e { leaderboard: { players: [123] }, ... }\n'))))),(0,n.kt)(l.Z,{value:"Luau",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In Luau, you should exporting the types from each producer file and manually combine them in the root producer file. This allows you to have a type-safe root producer with intellisense for state and actions.")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"router.lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local Reflex = require(ReplicatedStorage.Packages.reflex)\n\nexport type RouterState = {\n    page: string,\n}\n\nexport type RouterDispatchers = {\n    setPage: (page: string) -> RouterState,\n}\n\nlocal initialState: RouterState = {\n    page = "home",\n}\n\nlocal routerProducer = Reflex.createProducer(initialState, {\n    setPage = function(state, page: string)\n        return { page = page }\n    end,\n})\n\nreturn {\n    producer = routerProducer,\n}\n'))),(0,n.kt)(l.Z,{value:"leaderboard.lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local Reflex = require(ReplicatedStorage.Packages.reflex)\n\nexport type LeaderboardState = {\n    players: { number },\n}\n\nexport type LeaderboardDispatchers = {\n    addPlayer: (player: number) -> LeaderboardState,\n    removePlayer: (player: number) -> LeaderboardState,\n}\n\nlocal initialState: LeaderboardState = {\n    players = {},\n}\n\nlocal leaderboardProducer = Reflex.createProducer(initialState, {\n    addPlayer = function(state, player: number)\n        local nextState = table.clone(state)\n        local nextPlayers = table.clone(state.players)\n\n        table.insert(nextPlayers, player)\n        nextState.players = nextPlayers\n\n        return nextState\n    end,\n\n    removePlayer = function(state, player: number)\n        local nextState = table.clone(state)\n        local nextPlayers = table.clone(state.players)\n\n        table.remove(nextPlayers, table.find(nextPlayers, player) or -1)\n        nextState.players = nextPlayers\n\n        return nextState\n    end,\n})\n\nreturn {\n    producer = leaderboardProducer,\n}\n"))),(0,n.kt)(l.Z,{value:"init.lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local Reflex = require(ReplicatedStorage.Packages.reflex)\nlocal router = require(script.router)\nlocal leaderboard = require(script.leaderboard)\n\nexport type RootProducer = Reflex.Producer<RootState, RootDispatchers>\n\nexport type RootState = {\n    router: router.RouterState,\n    leaderboard: leaderboard.LeaderboardState,\n}\n\nexport type RootDispatchers = router.RouterDispatchers &\n    leaderboard.LeaderboardDispatchers\n\nreturn Reflex.combineProducers({\n    router = router.producer,\n    leaderboard = leaderboard.producer,\n}) :: RootProducer\n"))),(0,n.kt)(l.Z,{value:"Usage",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local Reflex = require(ReplicatedStorage.Packages.reflex)\nlocal producer = require(script.Parent.producer)\n\nproducer.setPage("leaderboard")\n--\x3e { router = { page = "leaderboard" }, ... }\n\nproducer.addPlayer(123)\n--\x3e { leaderboard = { players = { 123 } }, ... }\n')))))),(0,n.kt)("p",null,"Remember that the combined producer is decoupled from the original producers. Updating the state of the combined producer will not update the state of the original producers, and vice versa."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"selecting-combined-state"},"Selecting combined state"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"combine-producers"},(0,n.kt)("inlineCode",{parentName:"a"},"combineProducers"))," will organize state by the keys of the given ",(0,n.kt)("inlineCode",{parentName:"p"},"producers")," object. This makes it easy to select state from the combined producer."),(0,n.kt)("p",null,"Assuming we have the ",(0,n.kt)("a",{parentName:"p",href:"#using-multiple-producers"},"same producers from above"),", we create selectors for the leaderboard like so:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="selectors/leaderboard.ts"',title:'"selectors/leaderboard.ts"'},'import { Players } from "@rbxts/services";\nimport { createSelector } from "@rbxts/reflex";\nimport { RootState } from "../producer";\n\nexport const selectLeaderboardUserIds = (state: RootState) => {\n    return state.leaderboard.players;\n};\n\nexport const selectLeaderboardPlayers = createSelector([selectLeaderboardUserIds], (userIds) => {\n    return userIds.mapFiltered((userId) => Players.GetPlayerByUserId(userId));\n});\n'))),(0,n.kt)(l.Z,{value:"Luau",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="selectors/leaderboard.lua"',title:'"selectors/leaderboard.lua"'},'local Players = game:GetService("Players")\nlocal ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal Reflex = require(ReplicatedStorage.Packages.reflex)\nlocal producer = require(script.Parent.Parent.producer)\n\nlocal function selectLeaderboardUserIds(state: producer.RootState)\n    return state.leaderboard.players\nend\n\nlocal selectLeaderboardPlayers = Reflex.createSelector(\n    { selectLeaderboardUserIds },\n    function(userIds: { number })\n        local players = {}\n        for _, userId in userIds do\n            table.insert(players, Players:GetPlayerByUserId(userId))\n        end\n        return players\n    end\n)\n\nreturn {\n    selectLeaderboardUserIds = selectLeaderboardUserIds,\n    selectLeaderboardPlayers = selectLeaderboardPlayers,\n}\n')))),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"create-selector"},(0,n.kt)("inlineCode",{parentName:"a"},"createSelector"))," for more information on how to create selectors."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"dispatching-one-action-to-multiple-producers"},"Dispatching one action to multiple producers"),(0,n.kt)("p",null,"An interesting caveat of ",(0,n.kt)("a",{parentName:"p",href:"combine-producers"},(0,n.kt)("inlineCode",{parentName:"a"},"combineProducers"))," is that combined actions are not scoped to their respective producers. Any name collisions will result in actions stacking and being called together."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But you can use this to your advantage!")," If you want an action to update the state of multiple sub-states at once, it's as simple as using the same name."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here's a simple example of dispatching one action to multiple producers:")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const fooProducer = createProducer(0, {\n    // highlight-next-line\n    increment: (state, value: number) => state + value,\n});\n\nconst barProducer = createProducer(0, {\n    // highlight-next-line\n    increment: (state, value: number) => state + value,\n});\n\nconst producer = combineProducers({\n    foo: fooProducer,\n    bar: barProducer,\n});\n\n// highlight-next-line\nproducer.increment(1); // { foo: 1, bar: 1 }\n"))),(0,n.kt)(l.Z,{value:"Luau",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local fooProducer = Reflex.createProducer(0, {\n    // highlight-next-line\n    increment = function(state, value: number)\n        return state + value\n    end,\n})\n\nlocal barProducer = Reflex.createProducer(0, {\n    // highlight-next-line\n    increment = function(state, value: number)\n        return state + value\n    end,\n})\n\nlocal producer = Reflex.combineProducers({\n    foo = fooProducer,\n    bar = barProducer,\n})\n\n// highlight-next-line\nproducer.increment(1) --\x3e { foo = 1, bar = 1 }\n")))),(0,n.kt)("p",null,"Here, ",(0,n.kt)("inlineCode",{parentName:"p"},"increment")," is dispatched once, but it updates the state of both ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),", which originate from different producers. By allowing a name collision, we can dispatch to multiple producers at once."),(0,n.kt)("p",null,"Some use cases for this include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Resetting state:")," A ",(0,n.kt)("inlineCode",{parentName:"p"},"reset")," action can reset the state of multiple producers at once.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Global events:")," A script can dispatch a ",(0,n.kt)("inlineCode",{parentName:"p"},"playerAdded")," action to multiple producers to notify them of a new player.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Modular save data:")," A ",(0,n.kt)("inlineCode",{parentName:"p"},"playerDataLoaded")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"playerDataClosing")," action can be dispatched to multiple producers to initialize and clear player data."))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"))}f.isMDXComponent=!0}}]);