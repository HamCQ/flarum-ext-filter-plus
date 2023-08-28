<?php
use Illuminate\Database\Schema\Blueprint;

use Illuminate\Database\Schema\Builder;


return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('content_check_log')) {
            return;
        }
       
        $schema->create('content_check_log', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index();
            $table->unsignedInteger('discussion_id');
            $table->unsignedInteger('post_id');
            $table->text('result')->nullable();
            $table->integer('created_time');
        });
    },
    'down' => function (Builder $schema) {
        
    },
];