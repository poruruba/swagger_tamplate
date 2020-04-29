var components_utils = {
  'progress-dialog': {
    props: ['title'],
    template: 
      `<div class="modal fade" id="progress">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body">
                    <center><progress max="100" /></center>
                </div>
            </div>
        </div>
      </div>`,
  }
}