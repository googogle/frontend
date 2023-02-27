<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.person.proj.spring.PersonDTO"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

<body>
	<%
	//스크립트 릿 - 자바문법 사용
	//JSP파일을 톰캣에서 실행하면 서블릿 클래스로 만들어짐
	//스크립트 릿 안에 있는 내용들은 _service() 메소드의 내용으로 들어감
	
	PersonDTO dto = new PersonDTO();
	dto.setIdx(100);
	dto.setId("Lee");
	dto.setName("LEE");
	dto.setAge(27);
	
	out.println(dto); // print line - 출력 후 자동 줄 바꿈 된다.
	%>
</body>


</html>