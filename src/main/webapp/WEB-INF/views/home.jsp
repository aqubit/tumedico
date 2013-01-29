<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>2medi.co</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resources/css/tumedico.css" />
<script type='text/javascript'
	src='${pageContext.request.contextPath}/resources/js/jquery-1.8.3.min.js'></script>
<script type='text/javascript'
	src='http://maps.google.com/maps/api/js?sensor=false&#038;language&#038;region&#038;ver=3.0'></script>
<script type='text/javascript'
	src='${pageContext.request.contextPath}/resources/js/gis.js'></script>
</head>
<body>
	<div>Name provided: ${prueba.name}</div>
	<div id="container">
		<div id="items"></div>
		<div id="map"></div>
	</div>
</body>
</html>