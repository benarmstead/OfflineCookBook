import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/services.dart';

class Recipe {
  String title = "";
  String body = "";
  String imagePath = "";
  String filePath;
  List<String> tags = [];

  Recipe(this.filePath);

  Future<bool> start() async {
    await readText();
    fixImages();
    setTitle();
    setTags();
    return true;
  }

  Future<void> readText() async {
    body = await rootBundle.loadString(filePath);
  }

  void fixImages() {
    if (kIsWeb) {
      body = body.replaceAll('pix/', '${Uri.base}/assets/recipes/pictures/');
    } else {
      body = body.replaceAll('pix/', 'assets/recipes/pictures/');
    }
  }

  void setTitle() {
    title = body.split('\n')[0];
    title = title.replaceAll('#', '');
    title = title.trim();
  }

  void setTags() {
    tags = body.split('\n');
    for (var i in tags) {
      if (i.contains(';tags:')) {
        tags = i.replaceAll(';tags:', '').split(' ');
        tags.removeAt(0);
        break;
      }
    }
  }

  String getBody() {
    if (body.contains('recipes/pictures/')) {
      return "Cannot display images at the moment";
    }
    return body;
  }

  String getTitle() {
    return title;
  }

  List<String> getTags() {
    return tags;
  }
}
