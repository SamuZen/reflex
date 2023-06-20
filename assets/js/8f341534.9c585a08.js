"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[548],{6245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(1966),r=(a(9496),a(9613)),s=a(7934),i=a(4575),o=a(5488);const l={sidebar_position:4},c="createSelector",p={unversionedId:"reference/reflex/create-selector",id:"reference/reflex/create-selector",title:"createSelector",description:"createSelector lets you skip re-computing a value if the inputs/dependencies haven't changed.",source:"@site/docs/reference/reflex/create-selector.md",sourceDirName:"reference/reflex",slug:"/reference/reflex/create-selector",permalink:"/reflex/docs/reference/reflex/create-selector",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"referenceSidebar",previous:{title:"combineProducers",permalink:"/reflex/docs/reference/reflex/combine-producers"},next:{title:"Middleware",permalink:"/reflex/docs/reference/reflex/middleware"}},m={},u=[{value:"Reference",id:"reference",level:2},{value:"<code>createSelector(dependencies, combiner)</code>",id:"createselectordependencies-combiner",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:2},{value:"Transforming state",id:"transforming-state",level:3},{value:"Passing input parameters",id:"passing-input-parameters",level:3},{value:"Selector factories",id:"selector-factories",level:4},{value:"Store parameters in state",id:"store-parameters-in-state",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u},h="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createselector"},"createSelector"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createSelector")," lets you skip re-computing a value if the inputs/dependencies haven't changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const selector = createSelector(dependencies, combiner);\n")),(0,r.kt)(o.Z,{toc:u,mdxType:"TOCInline"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"createselectordependencies-combiner"},(0,r.kt)("inlineCode",{parentName:"h3"},"createSelector(dependencies, combiner)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createSelector")," returns a ",(0,r.kt)("em",{parentName:"p"},"memoized")," selector. This memoized selector will not call the combiner unless the arguments or the results of ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," have changed. Calling this selector will pass the input arguments to each dependency, and then pass the results of those dependencies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"combiner"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"combiner")," function is called with the results of the dependencies as arguments, in the same order as the dependencies passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"createSelector"),". The result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"combiner")," is the final value that the selector will cache and return."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const selectArray = (state: State) => state.array;\nconst selectMap = (state: State) => state.map;\n\nconst selectValues = createSelector([selectArray, selectMap] as const, (array, map) => {\n    return [...array, ...Object.values(map)];\n});\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function selectArray(state: State)\n    return state.array\nend\n\nlocal function selectMap(state: State)\n    return state.map\nend\n\nlocal selectValues = createSelector({ selectArray, selectMap }, function(array, map)\n    local values = table.clone(array)\n    for _, value in map do\n        table.insert(values, value)\n    end\n    return values\nend)\n")))),(0,r.kt)("p",null,"Both the ",(0,r.kt)("inlineCode",{parentName:"p"},"combiner")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," are memoized. This means that the dependencies are not called unless the arguments to the selector have changed, and the combiner is not called unless the dependencies return new values."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#usage"},"See more examples below.")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependencies")," - An array of selectors, the results of which will be passed to the combiner."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"combiner")," - A function that takes the results of the dependencies and returns a value.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createSelector")," returns a memoized selector. It behaves as a normal selector, but the result is cached and only re-computed if the arguments or dependencies change."),(0,r.kt)("admonition",{title:"Caveats",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Your functions should be ",(0,r.kt)("em",{parentName:"strong"},"idempotent"),";")," they should always return the same result for the same inputs. Otherwise, the selector may not work as expected.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies are compared by reference (",(0,r.kt)("inlineCode",{parentName:"strong"},"==="),").")," Even if a function returns an object that's shallowly equal to the previous result, it will still be seen as an update, and the selector will still re-compute.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If you're writing a selector returns a new object or array")," (i.e. filtering, sorting, etc.), you should ",(0,r.kt)("strong",{parentName:"p"},"always")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"createSelector"),". Otherwise, the selector will return a new object/array every time it's called, and listeners will run excessively. ",(0,r.kt)("a",{parentName:"p",href:"producer#subscribeselector-listener"},"See the ",(0,r.kt)("inlineCode",{parentName:"a"},"subscribe")," function for other caveats."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"transforming-state"},"Transforming state"),(0,r.kt)("p",null,"Often, you'll want to sort a list of items, filter out items that don't match a certain criteria, or perform some other transformation on your state. But trying to include these transformations in your state can quickly become difficult to keep up-to-date. ",(0,r.kt)("strong",{parentName:"p"},"Selectors are a great way to derive new values from state!")," With selectors, you can create a new object/array and apply transformations as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But one small mistake can worsen performance or cause unexpected behavior.")," Let's say you have a list of items in your cart, and you want to filter out items that are out of stock. Your producer might look something like this:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface CartState {\n    readonly items: readonly CartItem[];\n}\n\ninterface CartItem {\n    readonly name: string;\n    readonly price: number;\n    readonly stock: number;\n}\n\nconst initialState: CartState = {\n    items: [],\n};\n\nconst producer = createProducer(initialState, {\n    addItem: (state, item: CartItem) => ({\n        ...state,\n        items: [...state.items, item],\n    }),\n});\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"type CartState = {\n    items: { CartItem },\n}\n\ntype CartItem = {\n    name: string,\n    price: number,\n    stock: number,\n}\n\nlocal initialState: CartState = {\n    items = {},\n}\n\nlocal producer = createProducer(initialState, {\n    addItem = function(state, item: CartItem)\n        local nextState = table.clone(state)\n        local nextItems = table.clone(state.items)\n\n        table.insert(nextItems, item)\n        nextState.items = nextItems\n\n        return nextState\n    end,\n})\n")))),(0,r.kt)("p",null,"You have a shopping cart that contains a list of items, each with a ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"price"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"stock")," property. How would you ",(0,r.kt)("a",{parentName:"p",href:"producer#running-side-effects"},"subscribe")," to state and filter out items that are in stock?"),(0,r.kt)("p",null,"Your first instinct might be to write a simple function that filters items with a ",(0,r.kt)("inlineCode",{parentName:"p"},"stock")," above zero:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const selectInStock = (state: CartState) => {\n    // error-next-line\n    return state.items.filter((item) => item.stock > 0);\n};\n\nproducer.subscribe(selectInStock, (stock) => {\n    print("Items available:", stock);\n});\n'))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local function selectInStock(state: CartState)\n    // error-next-line\n    local stock = {}\n    for _, item in state.items do\n        if item.stock == 0 then\n            table.insert(stock, item)\n        end\n    end\n    // error-next-line\n    return stock\nend\n\nproducer:subscribe(selectInStock, function(stock)\n    print("Items available:", stock)\nend)\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This works, but it's not very efficient.")," The listener will run every time the state updates, even if the items themselves haven't changed!"),(0,r.kt)("admonition",{title:"why?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By ",(0,r.kt)("a",{parentName:"p",href:"producer#running-side-effects"},"subscribing to state")," with a selector, you essentially tell Reflex to run your selector ",(0,r.kt)("strong",{parentName:"p"},"every time the state changes.")," This is to compare the result with the previous value to detect a change, which is fine for simple selectors, but it can be inefficient if your selector returns new tables and functions, or is expensive to compute."),(0,r.kt)("p",{parentName:"admonition"},"In this case, every time the selector is called, it creates an ",(0,r.kt)("strong",{parentName:"p"},"entirely new list")," of in-stock items. This is bad because ",(0,r.kt)("a",{parentName:"p",href:"producer#subscribeselector-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"subscribe"))," compares the new value to the previous value by reference (",(0,r.kt)("inlineCode",{parentName:"p"},"==="),"), and since the selector only returns new arrays, Reflex will consider every unrelated state change to be an update. ",(0,r.kt)("strong",{parentName:"p"},"Your listener will be called excessively, even if the items haven't changed!"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Memoization"))," is a technique that allows you to cache the result of a function, and only re-compute it if the arguments change. ",(0,r.kt)("a",{parentName:"p",href:"#createselectordependencies-combiner"},(0,r.kt)("inlineCode",{parentName:"a"},"createSelector"))," offers a simple way to memoize selectors and avoid unnecessary re-computations, and is useful for writing efficient selectors that only run when needed."),(0,r.kt)("p",null,"We can wrap the selector in ",(0,r.kt)("a",{parentName:"p",href:"#createselectordependencies-combiner"},(0,r.kt)("inlineCode",{parentName:"a"},"createSelector")),", and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"state.items")," as a dependency. With this change, the selector will only be called when ",(0,r.kt)("inlineCode",{parentName:"p"},"state.items")," updates:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const selectItems = (state: CartState) => state.items;\n\n// highlight-start\nconst selectInStock = createSelector([selectItems] as const, (items) => {\n    return items.filter((item) => item.stock > 0);\n});\n// highlight-end\n\nproducer.subscribe(selectInStock, (stock) => {\n    print("Items available:", stock);\n});\n'))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local function selectItems(state: CartState)\n    return state.items\nend\n\n// highlight-start\nlocal selectInStock = createSelector({ selectItems }, function(items)\n    local stock = {}\n    for _, item in items do\n        if item.stock == 0 then\n            table.insert(stock, item)\n        end\n    end\n    return stock\nend)\n// highlight-end\n\nproducer:subscribe(selectInStock, function(stock)\n    print("Items available:", stock)\nend)\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"strong"},"selectInStock")," function is now ",(0,r.kt)("em",{parentName:"strong"},"memoized"),".")," In other words, it will only return a new list of items in-stock if ",(0,r.kt)("inlineCode",{parentName:"p"},"state.items")," changed. This is much safer and more efficient than the previous example."),(0,r.kt)("p",null,"You'd pass two arguments to ",(0,r.kt)("a",{parentName:"p",href:"#createselectordependencies-combiner"},(0,r.kt)("inlineCode",{parentName:"a"},"createSelector")),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An array of dependencies, which are selectors that the memoized selector depends on."),(0,r.kt)("li",{parentName:"ol"},'A "combiner" function that transforms the dependencies into a new value.')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#createselectordependencies-combiner"},(0,r.kt)("inlineCode",{parentName:"a"},"createSelector"))," then returns a new, memoized selector. Both the dependencies and the combiner function are memoized, so the selector will only re-compute if the selector arguments ",(0,r.kt)("em",{parentName:"p"},"and")," the combiner dependencies change. There are three steps the selector takes to determine the return value:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the arguments have changed since the last call."),(0,r.kt)("li",{parentName:"ol"},"Call each dependency with the arguments and check if any of them changed."),(0,r.kt)("li",{parentName:"ol"},"Call the combiner function with the new results of each dependency.")),(0,r.kt)("p",null,"If all of the steps above pass, the selector will return the new value. Otherwise, it will return the previous value and skip the combiner function. The process is very fast, and helps keep your selectors efficient."),(0,r.kt)("p",null,"For a more in-depth explanation of selectors, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"official Redux documentation.")," Most of the concepts apply to Reflex as well."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"passing-input-parameters"},"Passing input parameters"),(0,r.kt)("p",null,"Common use cases for selectors are retrieving an item's state and applying search filters, but passing the external parameters needed to retrieve the information can be unintuitive at first."),(0,r.kt)("p",null,"We'll go over two main ways to pass arguments to a selector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#selector-factories"},(0,r.kt)("strong",{parentName:"a"},"Selector factories:"))," Pass arguments to a creator function, which returns a new selector. This is best used for creating selectors that are ",(0,r.kt)("strong",{parentName:"p"},"specialized for unique, unchanging parameters,")," like tracking an item's state by ID.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#store-parameters-in-state"},(0,r.kt)("strong",{parentName:"a"},"Store parameters in state:"))," Store parameters in state and use them as dependencies. This is best used for selectors that depend on ",(0,r.kt)("strong",{parentName:"p"},"shared or frequently-changing parameters,")," like search queries or the sort order of a list."))),(0,r.kt)("p",null,"This decision only ",(0,r.kt)("em",{parentName:"p"},"really")," matters if your selectors are expensive to run, and in most cases, you can just use whichever makes the most sense to you. There's also ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors#passing-input-parameters"},"currying dependencies"),", but it's not fully supported by Reflex's APIs."),(0,r.kt)("h4",{id:"selector-factories"},"Selector factories"),(0,r.kt)("p",null,"Selector factories are functions that, given an initial set of arguments, return a new selector for those arguments. A unique instance of a selector with its own result cache is created for a given call to the factory."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It's best to use factories when selectors are created for a specific purpose.")," This can include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Selecting the state of an item by ID.")," For example, you might want to ",(0,r.kt)("a",{parentName:"p",href:"producer#observing-additions-and-removals"},"play a damage sound when a specific player is hurt"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deriving new values from a specific item.")," If you want to enhance an item with additional data, like a formatted price or a localized name, you can create a factory that takes an ID as an argument and returns a selector that enhances the item."))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const selectItems = (state: CartState) => state.items;\n\n// highlight-next-line\nconst selectItemById = (id: number) => {\n    return createSelector([selectItems] as const, (items) => {\n        return items.find((item) => item.id === id);\n    });\n};\n\nproducer.subscribe(selectItemById(1), print);\nproducer.subscribe(selectItemById(2), print);\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function selectItems(state: CartState)\n    return state.items\nend\n\n// highlight-next-line\nlocal function selectItemById(id: number)\n    return createSelector({ selectItems }, function(items)\n        for _, item in items do\n            if item.id == id then\n                return item\n            end\n        end\n    end)\nend\n\nproducer:subscribe(selectItemById(1), print)\nproducer:subscribe(selectItemById(2), print)\n")))),(0,r.kt)("admonition",{title:"caveats",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Having too many selectors with the same arguments at once can be wasteful.")," ",(0,r.kt)("em",{parentName:"p"},"Duplicate selectors")," are not ideal because each selector has its own cache, and can re-compute their value even if another duplicate just performed the same update. However, if you're only using a few selectors at a time, this is perfectly fine."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"#store-parameters-in-state"},"Consider storing parameters in state if you don't need unique selectors."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What are the pros and cons of this approach?"),(0,r.kt)("admonition",{title:"pros",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Results are cached per selector.")," Two selectors created to select different user IDs will only trigger a state update if their respective users change. This is unlike ",(0,r.kt)("a",{parentName:"p",href:"#store-parameters-in-state"},"sharing parameters in state"),", where one selector tracks changing parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Selectors can have state.")," You can assign logic to individual selectors, which can be used to store a history of state or other data.")))),(0,r.kt)("admonition",{title:"cons",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Memoizing the result is up to you.")," Be careful when using factories in Roact function components, as ",(0,r.kt)("strong",{parentName:"p"},"creating new selectors every re-render will reset the cache.")," Reflex offers memoization of factories with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelectorCreator")," Hook.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avoid duplicate selectors.")," While selectors having their own caches is useful, it can become suboptimal if you create lots of selectors with the same arguments. This can lead to unnecessary re-computations, as duplicate selectors don't know that the other has already been called with the same arguments."))))),(0,r.kt)("h4",{id:"store-parameters-in-state"},"Store parameters in state"),(0,r.kt)("p",null,"If you need to pass parameters that change often to a selector, it's best to store them in state and use them as dependencies. This is useful for selectors that are used in many places with shared parameters, or selectors only used in one place, like a search query or a sort order."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It's best to use state when selector parameters update frequently,")," like in response to user input. This is because in order to update a parameter with ",(0,r.kt)("a",{parentName:"p",href:"#selector-factories"},"selector factories"),", you need to create a new selector, which is not always necessary. You can instead store the query in state and use it as a dependency:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const selectItems = (state: CartState) => state.items.list;\n\nconst selectItemQuery = (state: CartState) => state.items.query;\n\n// highlight-next-line\nconst selectFilteredItems = createSelector([selectItems, selectItemQuery] as const, (items, query) => {\n    return items.filter((item) => {\n        const [match] = item.name.lower().match(query.lower());\n        return match !== undefined;\n    });\n});\n\nproducer.subscribe(selectFilteredItems, print);\n"))),(0,r.kt)(i.Z,{value:"Luau",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function selectItems(state: CartState)\n    return state.items.list\nend\n\nlocal function selectItemQuery(state: CartState)\n    return state.items.query\nend\n\n// highlight-next-line\nlocal selectFilteredItems = createSelector({ selectItems, selectItemQuery }, function(items, query)\n    local filteredItems = {}\n    for _, item in items do\n        if string.match(string.lower(item.name), string.lower(query)) then\n            table.insert(filteredItems, item)\n        end\n    end\n    return filteredItems\nend)\n\nproducer:subscribe(selectFilteredItems, print)\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What are the pros and cons of this approach?"),(0,r.kt)("admonition",{title:"pros",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Multiple listeners can share the same selector.")," This is unlike ",(0,r.kt)("a",{parentName:"p",href:"#selector-factories"},"selector factories"),", where each selector has its own cache and can re-compute their value even if another duplicate just performed the same update.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"It's safer to use.")," You don't need any extra logic like ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelectorCreator")," to prevent creating new selectors when it's not necessary.")))),(0,r.kt)("admonition",{title:"cons",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"You can't pass different parameters to the same selector.")," If you want to apply different transformations to your state in different places, consider ",(0,r.kt)("a",{parentName:"p",href:"#selector-factories"},"selector factories"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"It's not a replacement for factories.")," If you don't want to share parameters, or find yourself setting parameters manually before calling a selector, you should use a ",(0,r.kt)("a",{parentName:"p",href:"#selector-factories"},"selector factory")," instead."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"))}k.isMDXComponent=!0}}]);