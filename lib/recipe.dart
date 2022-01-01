import 'package:flutter/material.dart';

import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter/services.dart' show rootBundle;

class Recipe extends StatefulWidget {
  final String filePath;
  const Recipe(this.filePath);
  @override
  _Recipe createState() => _Recipe();
}

class _Recipe extends State<Recipe> {
  String dataFromFile = "";
  String title = "";

  Future<void> readText() async {
    final String response = await rootBundle.loadString(widget.filePath);
    setState(() {
      dataFromFile = response;
      dataFromFile =
          dataFromFile.replaceAll('pix/', 'assets/recipes/pictures/');
      title = dataFromFile.split('\n')[0];
      title = title.replaceAll('#', '').replaceAll(' ', '');
    });
  }

  @override
  Widget build(BuildContext context) {
    double padding = 10;
    double width = 800;
    double height = 100;

    readText();
    return Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: Center(
          child: Container(
            constraints: BoxConstraints(minWidth: height, maxWidth: width),
            padding: EdgeInsets.all(padding),
            child: Markdown(data: dataFromFile),
          ),
        ));
  }
}
