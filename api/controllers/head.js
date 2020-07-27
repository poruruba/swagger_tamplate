'use strict';

/*
  append to swagger.yaml

    head:
      x-swagger-router-controller: head
      operationId: s3
      responses:
        200:
          description: Success
*/

function s3(req, res) {
  console.log("[HEAD] head_s3 called");
  res.json({});
}

module.exports = {
  s3: s3
};
