package com.CucumberDbank.Helper;

import java.io.IOException;

import com.CucumberDbank.Helper.FileReaderManager;

public class FileReaderManager {
	private FileReaderManager() {
		
	}
		
		public static FileReaderManager getInstance() {
			FileReaderManager fr = new FileReaderManager();
			return fr;
		}
		public  static ConfigurationReader getCrInstance() throws IOException {
			ConfigurationReader cr = new ConfigurationReader();
			return cr;
		}
}
