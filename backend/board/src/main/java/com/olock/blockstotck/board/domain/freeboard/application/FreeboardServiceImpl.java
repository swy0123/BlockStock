package com.olock.blockstotck.board.domain.freeboard.application;

import com.olock.blockstotck.board.domain.freeboard.dto.request.FreeboardPostRequest;
import com.olock.blockstotck.board.domain.freeboard.exception.validator.FreePostValidator;
import com.olock.blockstotck.board.domain.freeboard.persistence.FileRepository;
import com.olock.blockstotck.board.domain.freeboard.persistence.FreePostRepository;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.File;
import com.olock.blockstotck.board.domain.freeboard.persistence.entity.FreePost;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FreeboardServiceImpl implements FreeboardService{

    private final FreePostRepository freePostRepository;
    private final FileRepository fileRepository;
    private final FreePostValidator freePostValidator;

    @Override
    public long postFreePost(long memberId, FreeboardPostRequest freeboardPostRequest) {

        FreePost freePost = new FreePost(memberId, freeboardPostRequest.getTitle(), freeboardPostRequest.getContent(), 0);
        FreePost postResponse = freePostRepository.save(freePost);

        return postResponse.getId();
    }

    @Override
    public void postFreeBoardFile(List<MultipartFile> multipartFileList, List<String> filePathList, long freePostId) {
        for(int i=0; i<multipartFileList.size(); i++){

            FreePost freePost = freePostRepository.findById(freePostId);

            String imgOriginalName = multipartFileList.get(i).getOriginalFilename();
            String imgPath = filePathList.get(i);
            String type = multipartFileList.get(i).getContentType();
            long size = multipartFileList.get(i).getSize();

            File file = new File(freePost, imgOriginalName, imgPath, type, size);

            fileRepository.save(file);
        }
    }
}
