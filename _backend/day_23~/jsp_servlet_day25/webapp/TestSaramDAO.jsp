<%@page import="java.io.IOException"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDTO"%>
<%@page import="java.util.List"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%!
SaramDAO saramDAO = new SaramDAO();

public void testFindAll(JspWriter out) throws IOException {
	   List<SaramDTO> list = saramDAO.findAll();
	   out.println(list);
	}
%>

<%
SaramDTO dto = new SaramDTO(0,"Kang","강",22);
saramDAO.save(dto);

testFindAll(out);


%>

</body>
</html>