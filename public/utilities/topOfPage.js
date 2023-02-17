
//This creates the nav bar
$("#topOfPage").append(`
		<a id="skipToContent" href="#middleOfPage"> Skip to content </a>
		<h1>`+$("title").text()+`</h1>
		<nav>
			<a href="/">Home</a>
			<a href="/learning">Learning</a>
			<a href="/about">About</a>
		</nav>
		</br>
`);

