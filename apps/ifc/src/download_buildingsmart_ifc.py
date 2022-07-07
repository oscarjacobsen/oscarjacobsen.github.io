
# https://stackoverflow.com/questions/56950987/download-file-from-url-and-save-it-in-a-folder-python

import os
import requests
from pathlib import Path



URL = "https://standards.buildingsmart.org/IFC"

DIR_NAME = URL.replace("https://", "").replace("org", "").replace(".", "_")





def download(url: str, dest_folder: str):
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)  # create folder if it does not exist

    filename = url.split('/')[-1].replace(" ", "_")  # be careful with file names
    file_path = os.path.join(dest_folder, filename)

    r = requests.get(url, stream=True)
    if r.ok:
        print("saving to", os.path.abspath(file_path))
        with open(file_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=1024 * 8):
                if chunk:
                    f.write(chunk)
                    f.flush()
                    os.fsync(f.fileno())
    else:  # HTTP status code 4XX/5XX
        print("Download failed: status code {}\n{}".format(r.status_code, r.text))






def main():
    """"""
    download(URL, dest_folder=f"data/{DIR_NAME}")

if __name__ == "__main__":
    main()