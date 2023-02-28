<%@page import="org.comstudy.myweb.dbcp.jdbcUtil"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		Connection conn = jdbcUtil.getConnection();
	out.println(conn);
	jdbcUtil.close(conn);
	%>
</body>
</html>