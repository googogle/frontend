package Spinboot.Thymeleaf.Controller;

import org.springframework.stereotype.Controller;


@Controller
public class IndexController {
	public String index() {
		//타임리프를 사용하면 src/main/resources/templates가 뷰 기본 폴더임 
		return "index";
	}
}
