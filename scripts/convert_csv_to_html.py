import pandas as pd
import os
from PIL import Image

csv_folder = "csv-files"
html_folder = "question-sets"
image_folder = "question-images"
resized_folder = "question-images/resized"

os.makedirs(html_folder, exist_ok=True)
os.makedirs(resized_folder, exist_ok=True)

def resize_image(image_path, output_path, width=300):
    try:
        with Image.open(image_path) as img:
            aspect_ratio = img.height / img.width
            new_height = int(width * aspect_ratio)
            img = img.resize((width, new_height), Image.ANTIALIAS)
            img.save(output_path)
    except Exception as e:
        print(f"⚠️ Error resizing {image_path}: {e}")

for filename in os.listdir(csv_folder):
    if filename.endswith(".csv"):
        csv_path = os.path.join(csv_folder, filename)
        html_filename = filename.replace(".csv", ".html")
        html_path = os.path.join(html_folder, html_filename)

        df = pd.read_csv(csv_path)

        html_content = f"""<!DOCTYPE html><html lang="en"><head>
        <meta charset="UTF-8"><title>{filename.replace('.csv', '')} - Questions</title></head><body>
        <h1>{filename.replace('.csv', '')} - Questions</h1>"""

        for _, row in df.iterrows():
            question = row["Question"]
            options = [row["Option A"], row["Option B"], row["Option C"], row["Option D"]]
            image = row.get("Image (Optional)", "").strip()

            html_content += f"<div class='question-box'><h2>{question}</h2>"

            if image:
                original_image_path = os.path.join(image_folder, image)
                resized_image_path = os.path.join(resized_folder, image)
                if os.path.exists(original_image_path):
                    resize_image(original_image_path, resized_image_path)
                    html_content += f"<img src='../{resized_folder}/{image}' alt='Question Image'><br>"

            for option in options:
                html_content += f"<p>{option}</p>"

            html_content += "<hr></div>"

        html_content += "</body></html>"

        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)

        print(f"✅ Converted {filename} → {html_filename} (with images)")

