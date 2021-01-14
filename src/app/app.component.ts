import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post } from "./models/post.model";
import * as PostActions from "./actions/post.actions";

interface AppState {
  post: Post;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  post: Observable<Post>;

  text: string; //form input

  constructor(private store: Store<AppState>) {
    this.post = this.store.select("post");
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
    this.text = "";
  }
}
