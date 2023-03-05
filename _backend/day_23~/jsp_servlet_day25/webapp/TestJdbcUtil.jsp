<%@page import="org.comstudy.myweb.dbcp.JdbcUtil_jdbc"%>
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
		Connection conn = JdbcUtil_jdbc.getConnection();
			out.println(conn);
			JdbcUtil_jdbc.close(conn);
	%>
</body>
</html>