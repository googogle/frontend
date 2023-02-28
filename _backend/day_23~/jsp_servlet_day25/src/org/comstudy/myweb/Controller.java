package org.comstudy.myweb;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Controller {
	//인터페이스를 상속받는 클래스은 인터페이스에 포함된 추상메소드를 구현해야함.
	String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException;

}