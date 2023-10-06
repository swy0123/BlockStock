import boto3
import os

from fastapi import File, UploadFile
import uuid

s3_client = boto3.client(
    's3',
    aws_access_key_id=os.environ["S3_ACCESS_KEY"],
    aws_secret_access_key=os.environ["S3_SECRET_KEY"],
    region_name=os.environ["S3_REGION"]
    # region_name="ap-northeast-2"
)


# def upload_tactic_image(file: UploadFile = File(...)):
def upload_tactic_image(file: UploadFile):
    file_name = str(generate_uuid()) + file.filename

    os.makedirs("./image/", exist_ok=True)

    content = file.file.read()

    # print(file.content_type)

    filename = f"{str(uuid.uuid4())}.svg"
    with open(os.path.join("./image/", filename), "wb") as fp:
        fp.write(content)

    # print("여까지 옴3")
    # print(os.environ["S3_BUCKET"])
    s3_client.upload_file(
        "./image/" + filename,
        os.environ["S3_BUCKET"],
        "tactic/" + file_name,
        ExtraArgs={'ContentType': 'image/svg+xml'}
    )
    return file_name


def generate_uuid():
    new_uuid = uuid.uuid4()
    return new_uuid

