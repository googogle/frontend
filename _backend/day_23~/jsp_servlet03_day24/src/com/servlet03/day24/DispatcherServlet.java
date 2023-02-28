package com.servlet03.day24;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.servlet03.day24.model.PersonDTO;

public class DispatcherServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("DispatcherServlet - doGet() called");

		// PersonDTO객체가 저장된 List를 view 페이지에 전달하기
		PersonDTO person1 = new PersonDTO(1, "Lee", "LEE", 27);
		req.setAttribute("person", person1);

		ArrayList<PersonDTO> list = new ArrayList<PersonDTO>();
		list.add(new PersonDTO(2, "Kim", "KIM", 28));
		list.add(new PersonDTO(3, "Park", "PARK", 29));
		list.add(new PersonDTO(4, "Kwon", "KWON", 30));
		req.setAttribute("list", list);

		String personViewName = "/WEB-INF/views/person/list.jsp";
		RequestDispatcher personView = req.getRequestDispatcher(personViewName);
		personView.forward(req, resp);


	}
}
