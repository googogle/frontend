<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<h2>��� ���� ����</h2>
	<form action="modify.do" method="post">
		<input type="hidden" name="seq" value="${saram.seq }" /> id: <input
			name="id" value="${saram.id }" /><br /> name: <input name="name"
			value="${saram.name }" /><br /> age: <input name="age"
			value="${saram.age }" /><br /> <input type="submit" value="�����Ϸ�" />
		<a href="list.do">���</a>
	</form>

</body>
</html>