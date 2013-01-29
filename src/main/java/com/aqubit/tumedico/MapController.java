package com.aqubit.tumedico;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aqubit.gis.vo.Feature;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("/map")
public class MapController {

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody
	Feature[] home(@RequestParam double x1, @RequestParam double y1,
			@RequestParam double x2, @RequestParam double y2) {
		Feature[] arrHola = new Feature[1];
		double mx = (x1+x2) /2;
		double my = (y1+y2) /2;
		arrHola[0] = new Feature();
		arrHola[0].setLat(mx);
		arrHola[0].setLng(my);
		arrHola[0].setName("Test1");
		return arrHola;
	}

}
