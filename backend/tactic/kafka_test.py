from kafka import KafkaProducer
from json import dumps

producer=KafkaProducer(acks=0, #메시지 받은 사람이 메시지를 잘 받았는지 체크하는 옵션 (0은 그냥 보내기만 한다. 확인x)
            compression_type='gzip', #메시지 전달할 때 압축
            bootstrap_servers=['127.0.0.1:9092'], #전달하고자하는 카프카 브로커의 위치
            evalue_serializer=lambda x: dumps(x).ncode('utf-8') #직렬화 : 데이터 전송을 위해 byte단위로 바꿔주는 작업 :
                                                               #dumps 함수이용. dump : json 값을 메모리에 올려준다. encode를 통해서 올린다.
                                                               #x가 있으면, x를 dumps로 바꾸고 encode 한다.
          )

for i in range(10): #10개의 값을
    data={'name':'Dowon-'+str(i)}
    producer.send('test-2021-09-05',value=data)
    producer.flush() # 비우는 작업.

print("DONE")