package com.olock.blockstotck.board.domain.freeboard.dto.response;

import lombok.Getter;

@Getter
public class FileResponse {
    private String fileName;
    private String path;
    private String type;

    public FileResponse(String fileName, String path, String type){
        super();
        this.fileName = fileName;
        this.path = path;
        this.type = type;
    }
}
