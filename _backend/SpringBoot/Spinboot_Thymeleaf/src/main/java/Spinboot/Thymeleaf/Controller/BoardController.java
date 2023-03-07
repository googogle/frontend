package Spinboot.Thymeleaf.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BoardController {
	
	@GetMapping("/getBoardList")
	public String getBoardList() {
		return "getBoardList";
	}
}
