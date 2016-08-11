<script type ="text/javascript">
	var d = new Date;
	var hour = d.getHours();
	var minute = d.getMinutes();

if (time <10) {
	document.write("<b>Good Morning</b>");
} else if (time >10 && time <16) {
	document.write("<b>Good Day</b>");
} else {
	document.write("<b>Hello World</b>");
}
</script>