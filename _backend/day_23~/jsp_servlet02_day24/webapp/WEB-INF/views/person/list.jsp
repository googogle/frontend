<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- Servlet에서 forward되는 JSP페이지는 해당 서블릿페이지 내부에 있는것과 같음.
	(request, response객체가 전달되기 때문에.) -->
	<h1>person list page</h1>
	<!-- JSP에서 사용가능한 표현식 : expression, EL, JSTL등
	JSP에서 기본으로 제공되는 내장객체 : pageContext, request, session, application
	 -->
	<!-- EL -->
	<p>hello ${username}.</p>
	<p>userList
	<hr />
	<%
		// Object객체를 ArrayList타입으로 다운캐스팅
	ArrayList<String> userList = (ArrayList<String>) request.getAttribute("userList");
	for (String user : userList) {
		out.println(user + "<br/>");
	}
	%>
	</p>

	<!-- JSP 실행 > Servlet.java파일로 변환 > 컴파일 후 톰캣에서 .class파일 실행 > 
	최종 클라이언트에 HTML소스가 전달됨 -->

	<!-- 
	MVC : Model View Controller. Model2라고도 한다.
	Model : DB와 연관되는 부분. DAO DTO
	View : 사용자가 보는 화면과 연관되는 부분. JSP, HTML, Ajax, Thymleaf등..
	Controller : Model2에서는 Servlet이 컨트롤러 역할을 하고 Model1에서는 JSP가 컨트롤러 역할을 함.
	 -->
</body>
</html>