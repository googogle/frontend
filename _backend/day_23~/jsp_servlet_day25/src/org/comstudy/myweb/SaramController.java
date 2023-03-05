package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.saram.model.SaramDAO;
import org.comstudy.myweb.saram.model.SaramDTO;


public class SaramController implements Controller {
	   
	   @Override
	   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
	      // String으로 다운 캐스팅
	      String path = (String)req.getAttribute("path");
	      
	      // SaramDTO 객체(Bean)가 저장된 List를 view 페이지에 전달 하기.
	      SaramDTO saram = new SaramDTO(1, "hong", "SaramController", 25);
	      req.setAttribute("saram", saram);
	      
	      SaramDAO dao = new SaramDAO();
	      String viewName = "/WEB-INF/views/home.jsp";
	      if(path.indexOf("/input.do") != -1) {
	         viewName = "/WEB-INF/views/saram/input.jsp";
	      } else if(path.indexOf("/detail.do") != -1) {
	         viewName = "/WEB-INF/views/saram/detail.jsp";
	      } else if(path.indexOf("/modify.do") != -1) {
	         viewName = "/WEB-INF/views/saram/modify.jsp";
	      } else {
	         List<SaramDTO> list = dao.findAll();
	         req.setAttribute("list", list);
	         viewName = "/WEB-INF/views/saram/list.jsp";
	      }
	      return viewName;
	      
	   }

}