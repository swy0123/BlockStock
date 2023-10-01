package com.olock.blockstotck.board.domain.freeboard.application;

import com.olock.blockstotck.board.domain.freeboard.dto.request.FreeboardPostRequest;
import com.olock.blockstotck.board.domain.freeboard.persistence.FileRepository;
import com.olock.blockstotck.board.domain.freeboard.persistence.FreePostRepository;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.File;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FreeboardServiceImpl implements FreeboardService{

    private final FreePostRepository freePostRepository;
    private final FileRepository fileRepository;

    @Override
    public long postFreePost(long memberId, FreeboardPostRequest freeboardPostRequest) {

        FreePost freePost = freeboardPostRequest.toFreePostEntity();
        freePost.setMemberId(memberId);

        FreePost postResponse = freePostRepository.save(freePost);

        return postResponse.getId();
    }

    @Override
    public void postFreeBoardFile(List<MultipartFile> multipartFileList, List<String> filePathList, long freePostId) {
        for(int i=0; i< multipartFileList.size(); i++){
            File file = new File();

            file.setFreePost(freePostRepository.findById(freePostId));
            file.setImgOriginalName(multipartFileList.get(i).getOriginalFilename());
            file.setImgPath(filePathList.get(i));
            file.setType(multipartFileList.get(i).getContentType());
            file.setSize(multipartFileList.get(i).getSize());

            fileRepository.save(file);
        }
    }
}
