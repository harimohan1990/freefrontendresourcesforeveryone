<!DOCTYPE html>
<html>

<head>
	<script src=
"https://code.jquery.com/jquery-3.6.0.min.js">
	</script>
	<style>
		div {
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		h2 {
			color: black;
		}
		#grandparent {
			background-color: green;
			width: 300px;
			height: 300px;
		}
		#parent {
			background-color: blue;
			width: 200px;
			height: 200px;
		}
		#child {
			background-color: red;
			width: 100px;
			height: 100px;
		}
	</style>
</head>

<body>
	<div>
		<h2>Welcome To GFG</h2>
		<div id="grandparent">GrandParent
			<div id="parent">Parent
				<div id="child">Child</div>
			</div>
		</div>
	</div>

	<script>
		const grandParent = document.getElementById("grandparent");
		const parent = document.getElementById("parent");
		const child = document.getElementById("child");

		grandParent.addEventListener("click", (e) => {
			console.log("GrandParent");
		}, { capture: false });
		parent.addEventListener("click", (e) => {
			console.log("Parent");
		}, { capture: false });
		child.addEventListener("click", (e) => {
			console.log("Child");
		}, { capture: false });
	</script>
</body>
</html>


//https://www.geeksforgeeks.org/what-is-event-bubbling-and-event-capturing-in-javascript/