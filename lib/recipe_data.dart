import 'package:flutter/services.dart';

class RecipeData {
  late String filepath;
  String dataFromFile = "";
  String title = "";

  Future<void> readText() async {
    final String response =
        await rootBundle.loadString('assets/recipes/markdown/apple-pie.md');
    dataFromFile = response;
    dataFromFile = dataFromFile.replaceAll('pix/', 'assets/recipes/pictures/');
    title = dataFromFile.split('\n')[0];
    title = title.replaceAll('#', '').replaceAll(' ', '');
  }

  RecipeData(filePath) {
    filePath = filePath;
    readText();
  }

  String getAllText() {
    return dataFromFile;
  }

  String getTitle() {
    return title;
  }
}
