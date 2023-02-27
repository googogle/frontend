package com.servlet02.day24;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/person/*")
public class PersonController extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String ctxPath = req.getContextPath();
		String reqUri = req.getRequestURI();

		System.out.println("PesonController doGet() called");
		System.out.printf("%s , %s \n", ctxPath, reqUri);

		int beginIndex = ctxPath.length();
		String urlPattern = reqUri.substring(beginIndex);
		System.out.println("urlPattern => " + urlPattern);

		// view페이지에서 사용할 변수 request에 저장
		// JSP페이지에서 request.getAttribute("username")로 사용가능.
		// 정수 문자열 객체, 컬렉션 리스트 등 전달가능.
		ArrayList<String> userList = new ArrayList<String>();
		userList.add("LEE, 27");
		userList.add("KIM, 37");
		userList.add("PARK, 47");
		
		req.setAttribute("username", "LEE");
		req.setAttribute("userList", userList);

		// view페이지로 forward
		// RequestDispatcher객체를 이용한 view페이지 forward
		String viewName = "/WEB-INF/views/person/list.jsp"; // view페이지의 위치
		RequestDispatcher view = req.getRequestDispatcher(viewName);
		// Forward : Servlet 페이지에서 하는 일을 JSP페이지로 위임. req와 resp객체 전달.
		view.forward(req, resp);
	}

}
