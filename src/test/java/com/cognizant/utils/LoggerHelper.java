package com.cognizant.utils;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LoggerHelper {

	private static boolean status = false;

	public static Logger getLogger(Class c) {

		if (status) {
			return Logger.getLogger(c);

		} else {
			PropertyConfigurator.configure("log4j.properties");
			status = true;
			return Logger.getLogger(c);
		}

	}

}
