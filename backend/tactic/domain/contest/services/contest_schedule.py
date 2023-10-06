from apscheduler.schedulers.background import BackgroundScheduler

sched = BackgroundScheduler(timezone='Asia/Seoul')

# 매일 1초마다 실행되면서 대회에 참가한 사람들
# 정해진 대회 기간까지 1분에 한 번씩 실행되면서
@sched.scheduled_job('cron', hour='1', minute='30', id='remove_inactive_image')
def contest_update():
    print("hello")

# 대회 시작
# 한 시간 단위
# 매일 9 ~ 15시 사이에 한 시간 단위로 진행되는 대회가 있는지 확인
    # 해당 대회에 대해 참가하는 사람들에 대해 대회 주기 시간 마다 알고리즘 적용ㄴ
    # 자산 변동
