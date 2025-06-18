/*
<div class='parent'>
<div class='child'>
<h1>hello world</h1>
</div>
</div>
*/

// lets create the nested elements;

const parent = React.createElement(
	"div",
	{ id: "container_parent" },
	React.createElement(
		"div",
		{ id: "child_div" },
		React.createElement("h1", { id: "children" }, "I am inside 2 div")
	)
);

/*
<div class='parent'>
<div class='child'>
<h1>elder h1 tad</h1>
<h2>sibling tag h2</h2>
</div>
</div>
*/

// add one more children or siblings

const parent1 = React.createElement(
	"div",
	{ id: "parent_container" },
	React.createElement("div", { id: "child_container" }, [
		React.createElement("h1", { id: "elder " }, "hello im elder"),
		React.createElement("h2", { id: "younger " }, "hello im younger"),
	])
);

// just an simple heading
const heading = React.createElement('h1', {id: 'heading'}, 'Creating Hello World using React!');
console.log(heading)


/**
 *   <div class='grandparent'>
 *      <div class='parent1'>
 *         <h1>hello elder 1 </h1>
 *         <h2>hello younger 1 </h2>
 *      </div>
 *      <div class='parent2'>
 *         <h1>hello elder 2 </h1>
 *         <h2>hello younger 2 </h2>
 *      </div>
 */

// create this im its mess but lets create;

const grandparent = React.createElement(
	"div",
	{ id: "grandparent_container" },
	[
		React.createElement(
			"div",
			{ id: "parent_container1" },
			[React.createElement("h1", { id: "elder1" }, "im elder 1")],
			React.createElement("h1", { id: "younger1" }, "im younger 1")
		),
		React.createElement(
			"div",
			{ id: "parent_container2" },
			[React.createElement("h1", { id: "elder12" }, "im elder 2")],
			React.createElement("h1", { id: "younger2" }, "im younger 2")
		),
	]
);

// look the look messy just hard to read it.

// just becoz of this code we have something called as jsx.

// we can write this type of react but its hard to write to understand therefor we use jsx and its just what core of react and how we wrote react in modern react we don't use createElement we have different type of writing and creating the stuff.  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(grandparent);