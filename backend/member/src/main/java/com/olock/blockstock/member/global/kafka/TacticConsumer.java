package com.olock.blockstock.member.global.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.award.appication.TacticService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TacticConsumer {
    private final TacticService tacticService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @KafkaListener(topics = "tactic-topic", groupId = "member-consumer")
    public void consumeMemberTopic(String message){
        try {
            String msgType = objectMapper.readTree(message).get("message").asText();
            System.out.println(msgType + "==================");
//            if (msgType.contains("CONTEST_END")) {
//                ContestEndMessage contestEndMessage = objectMapper.readValue(message, ContestEndMessage.class);
//                tacticService.updateContestResult(contestEndMessage.getContestId(), contestEndMessage.getContestTitle(), contestEndMessage.getMemberIds(), contestEndMessage.getResults());
//            }
//
//            else if (msgType.contains("CONTEST_PARTICIPATE")) {
//                ContestParticipateMessage contestParticipateMessage = objectMapper.readValue(message, ContestParticipateMessage.class);
//                tacticService.updateContestResult(contestParticipateMessage.getContestId(), contestParticipateMessage.getContestTitle(), contestParticipateMessage.getMemberIds(), contestParticipateMessage.getResults());
//
//            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
