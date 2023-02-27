package com.servlet03.day24;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class DispatcherServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("DispatcherServlet - doGet() called");
		
		//PersonDTO객체가 저장된 List를 view 페이지에 전달하기
		PersonDTO person1 = new PersonDTO(1,"Lee", "LEE", 27);
		
	      String viewName = "/WEB-INF/views/person/list.jsp";
	      RequestDispatcher view = req.getRequestDispatcher(viewName);
	      view.forward(req, resp);
	}
}
