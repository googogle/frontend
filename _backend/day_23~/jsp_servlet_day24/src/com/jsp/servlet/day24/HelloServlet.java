package com.jsp.servlet.day24;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//서블릿 클래스는 HttpServlet클래스를 상속받아야 함.
public class HelloServlet extends HttpServlet {
//서블릿 실행방법 - 브러우저 web.xml에 매핑시킨 주소를 주소창에 주소 입력
//브라우저를 이용해서 실행해야 함.
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset = UTF-8");
		
		//서버 콘솔에 출력
		System.out.println("HelloServlet - dpGet() called");
		
		//브라우저에 출력 - req객체에는 요청 정보(param, session, url 등),
		//resp객체에는 브라우저에 처리하는 정보(forward, redirect등)가 저장됨.
		PrintWriter out = resp.getWriter();
		out.println("<h2>HelloWrold</h2>");
		out.println("<a href = \"https://naver.com\">네이버</a>");
		out.close();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	// override

}
